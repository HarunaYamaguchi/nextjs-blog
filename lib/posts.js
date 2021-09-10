import fetch from "node-fetch";

export async function getAllPostsData() {
  const res = await fetch(
    new URL(`${process.env.NEXT_PUBLIC_RESTAPI_URL}api/list-post/`)
  );
  const posts = await res.json();
  const filteredPosts = posts.sort(
    (a, b) => new Date(b.create_at) - new Date(a.create_at) //作成された日時が大きい順になるようにソートをかける
  );
  return filteredPosts;
}

export async function getAllPostIds() {
  //idの一覧取得
  const res = await fetch(
    new URL(`${process.env.NEXT_PUBLIC_RESTAPI_URL}api/list-post/`)
  );
  const posts = await res.json();
  return posts.map((post) => {
    return {
      params: { id: String(post.id) },
    };
  });
}

export async function getPostData(id) {
  //詳細データの取得
  const res = await fetch(
    new URL(`${process.env.NEXT_PUBLIC_RESTAPI_URL}api/detail-post/${id}/`)
  );
  const post = await res.json();
  return {
    post,
  };
}
