import axios from "axios";

function postNewCard(newCard) {
    const addNewCard = (event, counter) => {
        event.preventDefault();
        if(!title || !body) {
          return;
        }
    
        const newCard = {
          card: {
            id: count,
            title: title,
            images: [wallpaper2],
            body: body,
            list: [
              { text: "reviews" },
              { text: "stuff to add" },
              { text: "Stuff" },
            ],
          },
        };
        
    if (!newCard) return;
    const addCard = {
      id: null,
      text: newCard,
    };

    const storedContent = JSON.stringify(localStorage.setItem("cards" , cards)) || [];
    console.log(storedContent);

    const updateCards = [...storedContent, addCard];
    return axios
      .post(`${BACKEND_PATH}useBook`, { data: JSON.stringify(updateCards) })
      .then((response) => storedContent.response)
      .catch((error) => console.error(error));
  };
  
  const deleteCard = (index) => {
    const newCards = [...cards.slice(0, index), ...cards.slice(index + 1)];
    return axios
      .delete(`${BACKEND_PATH}useBook`, { id, title, body })
      .then((response) => {
        window.localStorage.delete("cards", response.data);
        setCards(newCards);
        window.location.reload();
      })
      .catch((err) => console.warn(err));
  };
  const updateCard = (newCard, index) => {
    //I have no  idea what me is doing
    // const findCard = cards.findIndex((index) => index.id === (index + 1));
    // const updateCards = [...cards];
    //   updateCards[findCard] = {
    //     ...cards[findCard],
    //     title: updateTitle,
    //     body: updateBody,
    //   };
    // setCards(updateCards);]
    let newCards = cards;
    newCards[index] = newCards;
    cards = newCards;

    // const findCard = cards.map((card, i)=> {
    //   if(i === index) {
    //     return {
    //       ...card,
    //       title: updateTitle,
    //       body: updateBody,
    //     };
    //   }
    //   return card;
    // });
    // console.log(findCard);
    // setCards(findCard);
  };

  useEffect(() => {
    const storeCards = window.localStorage.getItem(
      "cards",
      JSON.stringify(cards)
    );
    if (storeCards) {
      setStuff(storeCards);
    }

    localStorage.getItem("cards", cards);
    console.log(cards);
    // return axios
    // .get(`${BACKEND_PATH}useBook`, { data: JSON.stringify(cards) })
    // .then((response) => storedContent.response)
    // .catch((error) => console.error(error));
  }, [cards]);
