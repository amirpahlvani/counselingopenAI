import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';

/**
 * The root component for the ExpertConnect mobile application.
 *
 * This file provides a simple placeholder UI.  Additional navigation,
 * localization and theming should be added in the `src/` folder.
 */
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Welcome to ExpertConnect</Text>
      <Text style={styles.subtitle}>Your multilingual consulting platform</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
});
