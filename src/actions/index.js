export const actionsType={
  INCREMENT:'INCREMENT',
  DECREMENT:'DECREMENT'
}

//actionオブジェクトを返すアクションクリエーターを作成
export const increment = () =>({
      type: actionsType.INCREMENT 
});

export const decrement = () =>({
    type: actionsType.DECREMENT
});