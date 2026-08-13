const mediaSelector = 'img, video, audio';

const isMedia = (target: EventTarget | null): target is Element =>
  target instanceof Element && Boolean(target.closest(mediaSelector));

const preventMediaAction = (event: Event) => {
  if (isMedia(event.target)) event.preventDefault();
};

export default defineNuxtPlugin(() => {
  document.addEventListener('contextmenu', preventMediaAction);
  document.addEventListener('dragstart', preventMediaAction);
});
