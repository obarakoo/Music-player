import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const getAudiusHost = async () => {
    try {
        const response = await fetch('https://api.audius.co');
        const json = await response.json();
        const hosts = json.data;
        return hosts[Math.floor(Math.random() * hosts.length)];
    } catch (error) {
        return 'https://audius-metadata-9.figment.io';
    }
};

const transformTrack = (track, host) => ({
    key: track.id,
    id: track.id,
    title: track.title,
    subtitle: track.user?.name || 'Unknown Artist',
    images: {
        coverart: track.artwork?.['480x480'] || track.artwork?.['150x150'] || 'https://via.placeholder.com/480',
    },
    hub: {
        actions: [
            {},
            { uri: `${host}/v1/tracks/${track.id}/stream?app_name=MUSICPLAYER` },
        ],
    },
    artists: [{ adamid: track.user?.id }],
});

const customBaseQuery = async (args, api, extraOptions) => {
    const host = await getAudiusHost();
    const rawBaseQuery = fetchBaseQuery({ baseUrl: `${host}/v1` });
    const result = await rawBaseQuery(args, api, extraOptions);

    if (result.data && result.data.data) {
        if (Array.isArray(result.data.data)) {
            result.data = result.data.data.map((track) => transformTrack(track, host));
        } else if (result.data.data.title && result.data.data.id) {
            result.data = transformTrack(result.data.data, host);
        } else {
            result.data = result.data.data;
        }
    }
    return result;
};

export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: customBaseQuery,
    endpoints: (builder) => ({
        getTopCharts: builder.query({ query: () => '/tracks/trending?app_name=MUSICPLAYER' }),
        getSongsByGenre: builder.query({
            query: (genre) => {
                const genreMap = {
                    POP: 'Pop',
                    HIP_HOP_RAP: 'Hip-Hop',
                    DANCE: 'Dance',
                    ELECTRONIC: 'Electronic',
                    SOUL_RNB: 'R&B',
                    ALTERNATIVE: 'Alternative',
                    ROCK: 'Rock',
                    LATIN: 'Latin',
                    COUNTRY: 'Country',
                    HOUSE: 'House',
                };
                const audiusGenre = genreMap[genre] || 'Pop';
                return `/tracks/trending?genre=${audiusGenre}&app_name=MUSICPLAYER`;
            },
        }),
        getSongsByCountry: builder.query({ query: () => '/tracks/trending?app_name=MUSICPLAYER' }),
        getSongsBySearch: builder.query({ query: (searchTerm) => `/tracks/search?query=${searchTerm}&app_name=MUSICPLAYER` }),
        getArtistDetails: builder.query({
            async queryFn(artistId, _queryApi, _extraOptions, baseQuery) {
                const artistResult = await baseQuery(`/users/${artistId}?app_name=MUSICPLAYER`);
                const tracksResult = await baseQuery(`/users/${artistId}/tracks?app_name=MUSICPLAYER`);

                if (artistResult.error) return { error: artistResult.error };
                if (tracksResult.error) return { error: tracksResult.error };

                return {
                    data: {
                        artist: artistResult.data,
                        tracks: tracksResult.data,
                    },
                };
            },
        }),
        getSongDetails: builder.query({ query: ({ songid }) => `/tracks/${songid}?app_name=MUSICPLAYER` }),
        getSongRelated: builder.query({ query: ({ songid }) => `/tracks/trending?app_name=MUSICPLAYER` }), // Audius doesn't have related tracks easily
    }),
});

export const {
    useGetTopChartsQuery,
    useGetSongsByGenreQuery,
    useGetSongsByCountryQuery,
    useGetSongsBySearchQuery,
    useGetArtistDetailsQuery,
    useGetSongDetailsQuery,
    useGetSongRelatedQuery,
} = shazamCoreApi;
