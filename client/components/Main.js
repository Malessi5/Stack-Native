import React from 'react';
import { fetchDrink } from '../redux/reducers';
import { connect } from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  Image,
} from 'react-native';
function Main(props) {
  const { getDrink, drink } = props;

  const handleSubmit = async () => {
    await getDrink();
  };

  return (
    <View style={styles.mainContainer}>
      {drink ? (
        <View style={styles.drinkContainer}>
          <View style={styles.imgContainer}>
            <Image source={{ uri: drink.imgUrl }} />
          </View>
          <View style={styles.textContainer}>
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
      <View style={styles.searchButton}>
        <Button
          onPress={() => {
            handleSubmit();
          }}
          title="Find a Random Drink"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    flex: 1,
    justifyContent: 'space-around',
    flexDirection: 'column',
    backgroundColor: '#93e1d8',
    alignItems: 'center',
  },
  drinkContainer: {
    display: 'flex',
    flex: 6,
    justifyContent: 'center',
    flexDirection: 'column',
    maxWidth: '500px',
  },
  imgContainer: {
    border: '1px solid black',
    flex: 3,
  },
  textContainer: {
    flex: 1,
  },
  searchButton: {
    height: '100px',
    backgroundColor: 'red',
    flex: 1,
  },
});

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
