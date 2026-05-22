import { useQuery } from '@tanstack/react-query';
import {
  fetchTopAiring,
    fetchMostPopular,
    fetchTopUpcoming,
    fetchMostFavorite,
    fetchLatestEpisode,

  searchAnime,
  fetchAnimeInfo,
  fetchEpisodes,
  fetchLanguages,
  fetchHeroBanner,
  fetchMoviesNew,
  fetchTvSeriesNew,
  fetchAnimationNew,
} from '@/lib/api';

export const useHeroBannerNew = () => {
  return useQuery({
    queryKey: ['hero-banner-new'],
    queryFn: () => fetchHeroBanner(),
  });
};

export const useMoviesNew = () => {
  return useQuery({
    queryKey: ['movies-new'],
    queryFn: () => fetchMoviesNew(),
  });
};

export const useTvSeriesNew = () => {
  return useQuery({
    queryKey: ['tv-series-new'],
    queryFn: () => fetchTvSeriesNew(),
  });
};

export const useAnimationNew = () => {
  return useQuery({
    queryKey: ['animation-new'],
    queryFn: () => fetchAnimationNew(),
  });
};

export const useTrendingAnime = (perPage = 10) => {
  return useQuery({
    queryKey: ['trending-anime'],
    queryFn: () => fetchTopAiring(),
  });
};

export const usePopularAnime = (perPage = 20) => {
  return useQuery({
    queryKey: ['popular-anime'],
    queryFn: () => fetchMostPopular(),
  });
};

export const useUpcomingAnime = (perPage = 20) => {
  return useQuery({
    queryKey: ['upcoming-anime'],
    queryFn: () => fetchTopUpcoming(),
  });
};

export const useLatestEpisodeAnime = () => {
  return useQuery({
    queryKey: ['latest-episode-anime'],
    queryFn: () => fetchLatestEpisode(),
  });
};

export const useFavoriteAnime = (perPage = 15) => {
  return useQuery({
    queryKey: ['favorite-anime'],
    queryFn: () => fetchMostFavorite(),
  });
};

export const useAiringAnime = (perPage = 10) => {
  return useQuery({
    queryKey: ['airing-anime'],
    queryFn: () => fetchTopAiring(),
  });
};

export const useSearchAnime = (search: string, enabled = true) => {
  return useQuery({
    queryKey: ['search-anime', search],
    queryFn: () => searchAnime(search),
    enabled: enabled && search.length > 2,
  });
};

export const useAnimeDetails = (id: string) => {
  return useQuery({
    queryKey: ['anime-details', id],
    queryFn: () => fetchAnimeInfo(id),
    enabled: !!id,
    staleTime: 1000 * 60 * 10,
  });
};

export const useAnimeEpisodes = (id: string) => {
  return useQuery({
    queryKey: ['anime-episodes', id],
    queryFn: () => fetchEpisodes(id),
    enabled: !!id,
    staleTime: 1000 * 60 * 30,
  });
};

export const useAnimeLanguages = (id: string, enabled = true) => {
  return useQuery({
    queryKey: ['anime-languages', id],
    queryFn: () => fetchLanguages(id),
    enabled: !!id && enabled,
    staleTime: 1000 * 60 * 30,
  });
};
