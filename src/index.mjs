const onClickAdd = () => {
  //テキストボックスの値を取得し初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  //li生成
  const li = document.createElement("li");
  //div生成
  const div = document.createElement("div");
  div.className = "list-row";
  
  //pタグ生成
  const p = document.createElement("p");
  p.innerText = inputText;
  
  //buttonタグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click",()=>{
    //完了ボタンの親タグ(li)を未完了リストから削除
    const completeTarget = completeButton.parentNode.parentNode;
    const completeTargetDiv = completeTarget.children[0];
    //TODO内容テキストを取得
    const text = completeTargetDiv.firstElementChild.innerText;
    // deleteFromIncompleteList(completeTarget);
    //div以下初期化
    completeTargetDiv.textContent = null;
    // pタグ生成
    const p = document.createElement("p");
    p.innerText = text;
    completeTargetDiv.appendChild(p);
    const backButton = document.createElement ("button");
    backButton.innerText = "戻す";
    completeTargetDiv.appendChild(backButton);
    //完了リストに追加
    document.getElementById("complete-list").appendChild(completeTarget);
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click",()=>{
    //削除ボタンの親タグ(li)を未完了リストから削除
    const deleteTarget = deleteButton.parentNode.parentNode;
    deleteFromIncompleteList(deleteTarget);
  });
  //liタグの子要素に各要素を設定
  li.appendChild(div);
  //divタグの子要素に各要素を設定
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  //未完了のリストに追加
  document.getElementById("incomplete-list").appendChild(li);
  
};

//未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
}

document
  .getElementById("add-button")
  .addEventListener("click",()=> onClickAdd());