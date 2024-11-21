const asosiyPromise = new Promise((resolve) => {
  const promise2 = new Promise((resolve) => resolve(Array(10).fill("Abdulaziz")));
  const promise3 = new Promise((resolve) =>
    resolve(
      Array.from(
        { length: 10 },
        () =>
          "https://dummyjson.com/image/400x200/008080/ffffff?text=Hello+Peter!&fontSize=16"
      )
    )
  );

  Promise.all([promise2, promise3]).then(([loremArray, imageUrls]) => {
    resolve([...loremArray, ...imageUrls]);
  });
});

asosiyPromise
  .then((combinedData) => {
    const container = document.createElement("div");
    document.body.appendChild(container);

    combinedData.forEach((item, index) => {
      if (item.startsWith("https")) {
        const img = document.createElement("img");
        img.src = item;
        img.alt = `Image ${index + 1}`;
        img.style.margin = "10px";
        img.width = 350;
        img.height = 250;
        container.appendChild(img);
      } else {
        const p = document.createElement("p");
        p.textContent = `${index + 1}: ${item}`;
        container.appendChild(p);
      }
    });
  })
  .catch((error) => console.error("Xato yuz berdi:", error));

asosiyPromise
  .then((combinedData) => console.log(combinedData))
  .catch((error) => console.error("Xato yuz berdi:", error));
