import fetch from "node-fetch";

export async function getAllTasksData() {
  const res = await fetch(
    new URL(`${process.env.NEXT_PUBLIC_RESTAPI_URL}api/list-task/`)
  );
  const tasks = await res.json();
  const filteredTasks = tasks.sort(
    (a, b) => new Date(b.create_at) - new Date(a.create_at) //作成された日時が大きい順になるようにソートをかける
  );
  return filteredTasks;
}

export async function getAllTaskIds() {
  //idの一覧取得
  const res = await fetch(
    new URL(`${process.env.NEXT_PUBLIC_RESTAPI_URL}api/list-task/`)
  );
  const tasks = await res.json();

  return tasks.map((task) => {
    return {
      params: { id: String(task.id) },
    };
  });
}

export async function getTaskData(id) {
  //詳細データの取得
  const res = await fetch(
    new URL(`${process.env.NEXT_PUBLIC_RESTAPI_URL}api/detail-task/${id}/`)
  );
  const task = await res.json();
  return task;
}
