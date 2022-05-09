export async function get(ctx) {
  const playlist = ctx.params.playlist;
  return {
    body: { playlist }
  };
}
