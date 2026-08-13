export async function onRequest(context) {
  const id = String(context.params.id || '');
  if (!/^[a-z0-9]{8}$/i.test(id)) {
    return new Response('链接无效', { status: 404, headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
  }
  return Response.redirect('https://url.yuhd320k.site/rd/' + id.toLowerCase(), 302);
}
