"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState, type CSSProperties } from "react";
import type { Project } from "@/data/projects";

type ShowcaseCarouselProps = {
  projects: Project[];
};

export function ShowcaseCarousel({ projects }: ShowcaseCarouselProps) {
  const featuredProjects = useMemo(
    () => projects.filter((project) => project.featured),
    [projects],
  );
  const [activeIndex, setActiveIndex] = useState(0);
  const favoritesRowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (featuredProjects.length <= 1) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % featuredProjects.length);
    }, 15000);

    return () => clearInterval(timer);
  }, [featuredProjects.length]);

  if (featuredProjects.length === 0) {
    return null;
  }

  const activeProject = featuredProjects[activeIndex];

  const scrollFavorites = (direction: "left" | "right") => {
    const row = favoritesRowRef.current;
    if (!row) return;
    const delta = direction === "right" ? 320 : -320;
    row.scrollBy({ left: delta, behavior: "smooth" });
  };

  return (
    <section className="showcase">
      <div className="showcase-media">
        <button
          type="button"
          className="hero-nav left"
          onClick={() =>
            setActiveIndex(
              (prev) =>
                (prev - 1 + featuredProjects.length) % featuredProjects.length,
            )
          }
          aria-label="Banner anterior"
        >
          ‹
        </button>
        <button
          type="button"
          className="hero-nav right"
          onClick={() => setActiveIndex((prev) => (prev + 1) % featuredProjects.length)}
          aria-label="Proximo banner"
        >
          ›
        </button>
        {activeProject.thumbnailWidth && activeProject.thumbnailHeight ? (
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
              alt={`Imagem de destaque do ${activeProject.title}`}
              width={activeProject.thumbnailWidth}
              height={activeProject.thumbnailHeight}
              className="showcase-image-intrinsic"
              sizes={`(max-width: ${activeProject.thumbnailWidth}px) 100vw, ${activeProject.thumbnailWidth}px`}
              priority
            />
          </div>
        ) : (
          <Image
            src={activeProject.thumbnail}
            alt={`Imagem de destaque do ${activeProject.title}`}
            fill
            sizes="100vw"
            className="showcase-image"
            priority
          />
        )}
        <div className="showcase-overlay">
          <div
            key={activeProject.slug}
            className="showcase-panel showcase-panel-enter"
          >
            <h1>{activeProject.title}</h1>
            <p className="showcase-meta">
              {activeProject.category} • {activeProject.impactLabel}
            </p>
            <p>{activeProject.shortDescription}</p>
            <div className="showcase-actions">
              <Link className="button primary gfn-like-cta" href={`/projetos/${activeProject.slug}`}>
                EXIBIR DETALHES
              </Link>
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
        <h3>Principais projetos</h3>
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
                className="favorite-card"
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
            aria-label="Ver proximos projetos"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
