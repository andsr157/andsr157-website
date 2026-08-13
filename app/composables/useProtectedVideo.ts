export const useProtectedVideo = (
  video: Ref<HTMLVideoElement | null>,
  source: string,
) => {
  let blobUrl: string | null = null;

  onMounted(async () => {
    if (!source) return;

    try {
      const response = await fetch(source);
      if (!response.ok) throw new Error(`Video request failed: ${response.status}`);

      const loadedBlobUrl = URL.createObjectURL(await response.blob());
      blobUrl = loadedBlobUrl;
      if (!video.value) {
        URL.revokeObjectURL(loadedBlobUrl);
        blobUrl = null;
        return;
      }

      video.value.src = loadedBlobUrl;
      video.value.load();
      await video.value.play();
    } catch (error) {
      console.error('Unable to load protected video', error);
    }
  });

  onBeforeUnmount(() => {
    if (blobUrl) URL.revokeObjectURL(blobUrl);
  });
};
