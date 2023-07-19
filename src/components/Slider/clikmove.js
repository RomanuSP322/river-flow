
const handleClickStart = (e) => {
    const touchDown = e.clientX;
    setTouchPosition(touchDown);
    setIsDragging(true);
    setTransition(0);
  };

  const handleMouseUp = (event) => {
    setIsDragging(false);
    setTransition(0.4);
    setPosX(visibleTab * slideWidth);
  };

  const handleMouseEnter = (event) => {
    setTransition(0);
  };

  const handleClickMove = (e) => {
    if (isDragging) {
      const touchDown = touchPosition;
      if (touchDown === null) {
        return;
      }
      const currentTouch = e.clientX;
      const diff = touchDown - currentTouch;
      const newPosX = posX + diff * 1.5;

      if (newPosX > 0 && newPosX < length * slideWidth) {
        setPosX(newPosX);
        setTouchPosition(e.clientX);
        setVisibleTab(Math.round(newPosX / slideWidth));
      }
    }
  };
