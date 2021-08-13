import React from 'react';
import { fetchDrink } from '../redux/reducers';
import { connect } from 'react-redux';

function Main(props) {
  const { getDrink, drink } = props;

  const handleSubmit = async () => {
    await getDrink();
  };

  return (
    <ScrollView className="main-container">
      {drink ? (
        <View id="drink-container">
          <Image source={{ uri: drink.imgUrl }} />
          <View id="drink-text">
            <Text>{drink.name}</Text>
            <Text>
              {drink.alcoholic} {drink.category}
            </Text>
            <Text>Glass: {drink.glass}</Text>
            <Text>Instructions: {drink.instructions}</Text>
            <Text>Ingredients</Text>
            {drink.ingredients.map((ing) => {
              return (
                <Text key={ing.key}>
                  {ing.measurement} {ing.name}
                </Text>
              );
            })}
          </View>
        </View>
      ) : (
        <View>
          <View id="drink-button">
            <Text>Hit the button!</Text>
          </View>
        </View>
      )}
      <View className="search-bar">
        <Button
          onPress={() => {
            handleSubmit;
          }}
          title="Find a Random Drink"
        />
      </View>
    </ScrollView>
  );
}

const mapStateToProps = (state) => {
  return {
    drink: state.drink,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getDrink: () => dispatch(fetchDrink()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
