gsap.registerPlugin(ScrollTrigger);

gsap.to(".caption p", {
  scale: 0.4,
  opacity: 1,
  scrollTrigger: {
    trigger: ".caption p",
    start: "top center",
    end: "bottom top",
    scrub: true,
    onUpdate: (self) => {
      const progress = self.progress.toFixed(2);
      const opacity = gsap.utils.interpolate(1, 0, progress);
      gsap.set(".caption p", { opacity });
    },
  },
});

gsap.to(".wrapper", {
    opacity: 0,
    scrollTrigger: {
      trigger: ".caption p",
      start: "top center",
      end: "bottom top",
      scrub: true,
    },
  });

  gsap.from(".heading-20, .p-20,.card-groups", {
    opacity: 0,
    duration: 5,
    scrollTrigger: {
      trigger: ".twenty-twenty",
      start: "top 80%",
      end: "center center",
      toggleActions: "play none none reverse"
    }
  });

  gsap.from(".heading-21, .p-21,.image", {
    opacity: 0,
    duration: 4,
    scrollTrigger: {
      trigger: ".twenty-one",
      start: "top 80%",
      end: "center center",
      toggleActions: "play none none reverse"
    }
  });


  gsap.from(".heading-22, .p-22", {
    opacity: 0,
    duration: 4,
    scrollTrigger: {
      trigger: ".twenty-two",
      start: "top 80%",
      end: "center center",
      toggleActions: "play none none reverse"
    }
  });

const track = document.getElementById('image-track');
  window.onmousedown = e => {
    track.dataset.mouseDownAt = e.clientX;
  }
  window.onmousemove = e => {

   if(track.dataset.mouseDownAt === "0")return;

    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX;
    const maxDelta = window.innerWidth/2;

    const percentage = (mouseDelta/maxDelta) * -100;
    const nextPercentageCalc = parseFloat(track.dataset.prevPercentage) + percentage;
    const nextPercentage = Math.max(Math.min(nextPercentageCalc, 0), -100);
    
    track.dataset.percentage = nextPercentage;

    track.animate({
      transform: `translate(${nextPercentage}%, -30%)`
    }, { duration: 1200, fill: "forwards" });

    for(const image of track.getElementsByClassName("image")) {
      image.animate({
        objectPosition: `${100 + nextPercentage}% center`
      }, { duration: 2400, fill: "forwards" });
    }
  
  }

  window.onmouseup = e => {
    track.dataset.mouseDownAt = "0";
    track.dataset.prevPercentage = track.dataset.percentage;
  }
