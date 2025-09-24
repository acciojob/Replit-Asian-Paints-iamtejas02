const changeBtn = document.getElementById('change_button');
    const resetBtn = document.getElementById('reset');
    const gridItems = document.querySelectorAll('.grid-item');

    function resetGrid() {
      gridItems.forEach(item => {
        item.style.backgroundColor = 'transparent';
      });
    }

    changeBtn.addEventListener('click', () => {
      const blockId = document.getElementById('block_id').value;
      const colour = document.getElementById('colour_id').value;

      resetGrid(); 

      const block = document.getElementById(blockId);
      if (block && colour) {
        block.style.backgroundColor = colour;
      } else {
        alert("Enter valid block id (1-9) and a color!");
      }
    });

    resetBtn.addEventListener('click', resetGrid);