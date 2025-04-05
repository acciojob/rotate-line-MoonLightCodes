let angle = 0;
      const line = document.getElementById("line");
      setInterval(() => {
        line.style.transform = `rotate(${angle++}deg) `;
      }, 20);