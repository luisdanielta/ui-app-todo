const colors = ["#D4FBE1", "#FBD4E4", "#ECD4FB", "#D4EAFB"];

export function Card(props) {
  // Create card
  const card = document.createElement("div");
  card.classList.add("card");
  card.setAttribute("id", props.id);

  // Name of note
  const title = document.createElement("h2");
  title.innerHTML = props.title;
  card.appendChild(title);

  // Tags
  const tags = document.createElement("div");
  tags.classList.add("tags");

  if (props.tags.length >= 3) {
    let tagsData = props.tags.slice(0, 3);
    tagsData.map((item) => {
      const tag = document.createElement("span");
      tag.classList.add("tag");
      tag.style.backgroundColor =
        colors[Math.floor(Math.random(4) * colors.length)];

      tag.innerHTML = item;
      tags.appendChild(tag);
    });
  }
  card.appendChild(tags);

  // Task
  const contents = document.createElement("div");
  contents.classList.add("contents");

  if (props.content.length >= 3) {
    let contentData = props.content.slice(0, 3);
    contentData.map((item) => {
      const content = document.createElement("div");
      content.classList.add(item.status ? "content-false" : "content");

      const input = document.createElement("input");
      input.type = "checkbox";
      input.checked = item.status;

      input.addEventListener("change", () => {
        content.classList.toggle("content");
        content.classList.toggle("content-false");
      });

      const text = document.createElement("span");
      text.innerHTML = item.text;
      text.classList.add("item");

      content.appendChild(input);
      content.appendChild(text);

      contents.appendChild(content);
    });
  }
  card.appendChild(contents);

  // Render
  root.appendChild(card);
}
