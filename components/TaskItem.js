import { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import EditInput from './EditInput';
import colours from '../constants/colours';

export default function ({
  handleDeleteTask,
  handleEditTask,
  toggleComplete,
  task,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const { id, description, isComplete } = task;

  const toggleIsEditing = () => {
    setIsEditing(!isEditing);
  };

  return (
    <View style={styles.container}>
      <View style={styles.actionsContainer}>
        <TouchableOpacity onPress={toggleIsEditing}>
          <Image
            source={
              isEditing
                ? require('../assets/png/edit-2-fill-green.png')
                : require('../assets/png/edit-2-fill.png')
            }
            style={styles.actionIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleComplete(id)}>
          <Image
            source={
              isComplete
                ? require('../assets/png/checkbox-circle-fill-green.png')
                : require('../assets/png/checkbox-circle-fill.png')
            }
            style={styles.actionIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleDeleteTask(id)}>
          <Image
            source={require('../assets/png/close-circle-fill-red.png')}
            style={styles.actionIcon}
          />
        </TouchableOpacity>
      </View>

      {isEditing ? (
        <EditInput
          task={task}
          handleEditTask={handleEditTask}
          setIsEditing={setIsEditing}
        />
      ) : (
        <View style={styles.descriptionWrapper}>
          <Text
            style={{
              fontSize: 24,
              textAlign: 'left',
              textDecorationLine: isComplete ? 'line-through' : 'none',
              textDecorationStyle: 'solid',
              color: isComplete ? colours.lightText : colours.darkText,
            }}>
            {description}
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  actionsContainer: {
    flexDirection: 'row',
  },
  actionIcon: {
    width: 30,
    height: 30,
    marginHorizontal: 10,
  },
  container: {
    paddingVertical: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: colours.grey,
    borderBottomStyle: 'solid',
    borderBottomWidth: 1,
  },
  descriptionWrapper: {
    padding: 10,
  }
});
