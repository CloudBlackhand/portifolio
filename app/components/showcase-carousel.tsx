"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useRef, useState, type CSSProperties, type TouchEvent } from "react";
import type { Project } from "@/data/projects";
import { getProjectLiveLinkLabel, getProjectKindLabel, getShowcaseProjects } from "@/data/projects";

type ShowcaseCarouselProps = {
  projects: Project[];
};

const SWIPE_THRESHOLD_PX = 48;

export function ShowcaseCarousel({ projects }: ShowcaseCarouselProps) {
  const featuredProjects = useMemo(() => getShowcaseProjects(projects), [projects]);
  const [activeIndex, setActiveIndex] = useState(0);
  const favoritesRowRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);

  if (featuredProjects.length === 0) {
    return null;
  }

  const activeProject = featuredProjects[activeIndex];

  const goTo = (direction: "prev" | "next") => {
    setActiveIndex((prev) => {
      if (direction === "prev") {
        return (prev - 1 + featuredProjects.length) % featuredProjects.length;
      }
      return (prev + 1) % featuredProjects.length;
    });
  };

  const scrollFavorites = (direction: "left" | "right") => {
    const row = favoritesRowRef.current;
    if (!row) return;
    const delta = direction === "right" ? 320 : -320;
    row.scrollBy({ left: delta, behavior: "smooth" });
  };

  const onTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.changedTouches[0]?.clientX ?? null;
  };

  const onTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    if (featuredProjects.length <= 1 || touchStartX.current === null) return;
    const endX = event.changedTouches[0]?.clientX ?? touchStartX.current;
    const delta = endX - touchStartX.current;
    touchStartX.current = null;

    if (Math.abs(delta) < SWIPE_THRESHOLD_PX) return;
    goTo(delta > 0 ? "prev" : "next");
  };

  return (
    <section className="showcase">
      <div
        className="showcase-media"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {featuredProjects.length > 1 && (
          <>
            <button
              type="button"
              className="hero-nav left"
              onClick={() => goTo("prev")}
              aria-label="Banner anterior"
            >
              ‹
            </button>
            <button
              type="button"
              className="hero-nav right"
              onClick={() => goTo("next")}
              aria-label="Próximo banner"
            >
              ›
            </button>
          </>
        )}
        {activeProject.thumbnailWidth && activeProject.thumbnailHeight ? (
          <Link
            href={`/projetos/${activeProject.slug}`}
            className="showcase-image-link"
            aria-label={`Abrir ${activeProject.title}`}
          >
            <div
              className="showcase-image-slot"
              style={
                {
                  "--thumb-max-w": `${activeProject.thumbnailWidth}px`,
                } as CSSProperties
              }
            >
              <Image
                src={activeProject.thumbnail}
                alt=""
                width={activeProject.thumbnailWidth}
                height={activeProject.thumbnailHeight}
                className="showcase-image-intrinsic"
                sizes={`(max-width: ${activeProject.thumbnailWidth}px) 100vw, ${activeProject.thumbnailWidth}px`}
                priority
                aria-hidden
              />
            </div>
          </Link>
        ) : (
          <Link
            href={`/projetos/${activeProject.slug}`}
            className="showcase-image-link showcase-image-link--fill"
            aria-label={`Abrir ${activeProject.title}`}
          >
            <Image
              src={activeProject.thumbnail}
              alt=""
              fill
              sizes="100vw"
              className="showcase-image"
              priority
              aria-hidden
            />
          </Link>
        )}
        <div className="showcase-overlay">
          <div
            key={activeProject.slug}
            className="showcase-panel showcase-panel-enter showcase-panel--clickable"
          >
            <Link
              className="showcase-panel-link"
              href={`/projetos/${activeProject.slug}`}
              aria-label={`Abrir ${activeProject.title}`}
            />
            <h1>{activeProject.title}</h1>
            <p className="showcase-meta">
              {getProjectKindLabel(activeProject)} • {activeProject.impactLabel}
            </p>
            <p>{activeProject.shortDescription}</p>
            <div className="showcase-actions">
              <Link
                className="button primary gfn-like-cta card-action-link"
                href={`/projetos/${activeProject.slug}`}
              >
                VER PROJETO
              </Link>
              {activeProject.liveUrl ? (
                <a
                  className="button gfn-like-cta card-action-link"
                  href={activeProject.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(event) => event.stopPropagation()}
                >
                  {getProjectLiveLinkLabel(activeProject)}
                </a>
              ) : null}
            </div>
          </div>
        </div>
        <div className="showcase-dots-overlay" role="tablist" aria-label="Projetos em destaque">
          {featuredProjects.map((project, index) => (
            <button
              key={project.slug}
              type="button"
              className={index === activeIndex ? "dot active" : "dot"}
              onClick={() => setActiveIndex(index)}
              aria-label={`Mostrar ${project.title}`}
            />
          ))}
        </div>
      </div>
      <div className="favorites-strip">
        <h3>Destaques — sistemas e landing pages</h3>
        <div className="favorites-track">
          <button
            type="button"
            className="favorites-nav left"
            onClick={() => scrollFavorites("left")}
            aria-label="Ver projetos anteriores"
          >
            ‹
          </button>
          <div className="favorites-row" ref={favoritesRowRef}>
            {featuredProjects.map((project) => {
              const favW = 320;
              const favH =
                project.thumbnailWidth && project.thumbnailHeight
                  ? Math.max(
                      1,
                      Math.round(
                        (favW * project.thumbnailHeight) /
                          project.thumbnailWidth,
                      ),
                    )
                  : 180;
              return (
              <Link
                key={project.slug}
                className={
                  project.slug === activeProject.slug
                    ? "favorite-card is-active"
                    : "favorite-card"
                }
                href={`/projetos/${project.slug}`}
                aria-label={`Abrir ${project.title}`}
              >
                <Image
                  src={project.thumbnail}
                  alt={`Miniatura do ${project.title}`}
                  width={favW}
                  height={favH}
                  className="favorite-image"
                />
                <span>{project.title}</span>
              </Link>
            );
            })}
          </div>
          <button
            type="button"
            className="favorites-nav right"
            onClick={() => scrollFavorites("right")}
            aria-label="Ver próximos projetos"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
