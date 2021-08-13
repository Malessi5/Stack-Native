import React from 'react';
import { fetchDrink } from '../redux/reducers';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
function Main(props) {
  const { getDrink, drink } = props;

  const handleSubmit = async () => {
    await getDrink();
  };

  return (
    <ScrollView style={styles.mainContainer}>
      {drink ? (
        <View style={styles.drinkContainer}>
          <Image style={styles.imgContainer} source={{ uri: drink.imgUrl }} />
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

const styles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    maxWidth: '500px',
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: '#93e1d8',
    alignItems: 'center'
  },
  drinkContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    maxWidth: '500px'
  },
  imgContainer {
    maxWidth: '500px',
    border: '1px solid black'
  }
})

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
