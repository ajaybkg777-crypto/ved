import { useEffect } from "react";

const revealSelector = [
  ".section .eyebrow",
  ".section .kicker",
  ".section h1",
  ".section h2",
  ".section h3",
  ".section p",
  ".section li",
  ".section figure",
  ".section img",
  ".section video",
  ".section .btn",
  ".section dl > div",
  ".section .chapter-origin",
  ".section .chapter-support",
  ".section .always-sister",
  ".section .letter-row",
  ".section .letter-detail",
  ".section .vaidehi-complete",
  ".section .report-panel",
  ".section .terms-list article",
  ".section .final-rule",
  ".section .sister-pass",
  ".section .final-memory-keepsake",
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
          { threshold: 0.12, rootMargin: "0px 0px -7% 0px" },
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
        element.style.setProperty("--reveal-delay", `${Math.min(siblingIndex % 6, 5) * 65}ms`);

        if (element.matches("h1, h2, h3")) element.classList.add("reveal-heading");
        if (element.matches("img, video, figure")) element.classList.add("reveal-media");
        if (element.matches(".btn, button")) element.classList.add("reveal-control");

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
