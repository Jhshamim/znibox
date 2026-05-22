import TopBar from '@/components/TopBar';
import HeroSlider from '@/components/HeroSlider';
import AnimeRow from '@/components/AnimeRow';
import BottomNav from '@/components/BottomNav';
import { useHeroBannerNew, useMoviesNew, useTvSeriesNew, useAnimationNew } from '@/hooks/useAnime';

const Index = () => {
  const { data: heroBanner, isLoading: heroLoading } = useHeroBannerNew();
  const { data: movies, isLoading: moviesLoading } = useMoviesNew();
  const { data: tvSeries, isLoading: tvSeriesLoading } = useTvSeriesNew();
  const { data: animation, isLoading: animationLoading } = useAnimationNew();

  return (
    <div className="min-h-screen bg-background pb-24 sm:pb-32">
      <TopBar />

      {/* Hero Section */}
      {heroLoading ? (
        <div className="h-[55vh] sm:h-[60vh] md:h-[70vh] shimmer" />
      ) : (
        heroBanner && <HeroSlider anime={heroBanner} />
      )}

      {/* Content Rows */}
      <div className="relative z-10 px-0">
        <AnimeRow
          title="🎬 Movies"
          anime={movies || []}
          isLoading={moviesLoading}
        />

        <AnimeRow
          title="📺 TV Series"
          anime={tvSeries || []}
          isLoading={tvSeriesLoading}
        />

        <AnimeRow
          title="✨ Ranking"
          anime={animation || []}
          isLoading={animationLoading}
        />
      </div>

      <BottomNav />
    </div>
  );
};

export default Index;
