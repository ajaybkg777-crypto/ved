import { useEffect } from "react";

const revealSelector = [
  ".welcome-stage > .eyebrow",
  ".welcome-stage > h2",
  ".welcome-stage > .btn",
  ".chapter-letter-heading",
  ".chapter-origin",
  ".chapter-support",
  ".always-sister",
  ".chapter-letter-footer",
  ".moment-heading",
  ".letters-section > .eyebrow",
  ".letters-section > h2",
  ".letter-row",
  ".letter-progress",
  ".report-panel",
  ".terms-heading",
  ".terms-list article",
  ".final-rule",
  ".sister-pass",
  ".promise > .eyebrow",
  ".promise > h2",
  ".final-memory-copy",
  ".final-video-wrap",
  ".final-play-prompt",
  ".final-message > .eyebrow",
  ".final-message > strong",
  ".final-screen > *",
].join(",");

export default function useScrollReveal(enabled) {
  useEffect(() => {
    if (!enabled) return undefined;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.documentElement.classList.add("motion-ready");

    const observer = reduceMotion
      ? null
      : new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (!entry.isIntersecting) return;
              entry.target.classList.add("is-revealed");
              observer.unobserve(entry.target);
            });
          },
          { threshold: 0.08, rootMargin: "0px 0px -4% 0px" },
        );

    const register = (root) => {
      const candidates = [];
      if (root instanceof Element && root.matches(revealSelector)) candidates.push(root);
      if (root.querySelectorAll) candidates.push(...root.querySelectorAll(revealSelector));

      candidates.forEach((element) => {
        if (element.dataset.revealReady || element.closest(".animated-text")) return;

        element.dataset.revealReady = "true";
        element.classList.add("scroll-reveal");
        const siblingIndex = [...element.parentElement.children].indexOf(element);
        element.style.setProperty("--reveal-delay", `${Math.min(siblingIndex % 4, 3) * 35}ms`);

        if (reduceMotion) element.classList.add("is-revealed");
        else observer.observe(element);
      });
    };

    register(document.querySelector("main"));

    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) register(node);
        });
      });
    });
    mutationObserver.observe(document.querySelector("main"), { childList: true, subtree: true });

    return () => {
      observer?.disconnect();
      mutationObserver.disconnect();
      document.documentElement.classList.remove("motion-ready");
    };
  }, [enabled]);
}
