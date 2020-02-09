import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const blogPostForm = ({ onSubmit, initialValues }) => {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);

  return (
    <View>
      <Text style={styles.label}>Edit Screen</Text>
      <TextInput style={styles.input} value={title} onChangeText={setTitle} />
      <Text style={styles.label}>Edit Content:</Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={setContent}
      />
      <Button title="Save Blog Post" onPress={() => onSubmit(title, content)} />
    </View>
  );
};

blogPostForm.defaultProps = {
  initialValues: {
    title: '',
    content: '',
  },
};

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'grey',
    marginBottom: 15,
    margin: 5,
    padding: 5,
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 5,
  },
});

export default blogPostForm;
