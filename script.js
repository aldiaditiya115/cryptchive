gsap.registerPlugin(ScrollTrigger);

// Hero Image Animation
gsap.to("#hero-image", {
  scrollTrigger: {
    trigger: "#hero",
    start: "top top",
    end: "bottom top",
    scrub: true,
    pin: false
  },
  scale: 0.3,
  xPercent: -100,
  yPercent: -100,
  borderRadius: "50%",
  opacity: 1,
  ease: "power2.out"
});

// Profile image in navbar appears only after scroll
ScrollTrigger.create({
  trigger: "#hero",
  start: "bottom top",
  toggleClass: { targets: "#profile-pic-small", className: "block" }
});

// Cards Animation - Overlapping scroll in
gsap.utils.toArray(".card").forEach((card) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: "top 80%",
      end: "bottom center",
      scrub: false,
      toggleActions: "play none none none"
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out"
  });
});