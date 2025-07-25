import React, { useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView, Animated, Dimensions } from 'react-native';
import { getUserInfo, logoutUser } from '../services/authService';

// get screen width for off-screen start positions
const { width } = Dimensions.get('window');

const ProfileScreen = () => {
  const slideLeft = useRef(new Animated.Value(-width)).current;   // start off-screen left
  const slideRight = useRef(new Animated.Value(width)).current;   // start off-screen right

  useEffect(() => {
    // run both animations in parallel
    Animated.parallel([
      Animated.timing(slideLeft, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.timing(slideRight, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      }),
    ]).start();
  }, [slideLeft, slideRight]);

  const handleLogout = () => {
    logoutUser();
  };

  const user = getUserInfo();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.header}>Profile</Text>
        <Text style={styles.info}>{user?.email}</Text>
        <Text style={styles.info}>{user?.displayName}</Text>

        <Button
          title="Sign Out"
          color="green"
          onPress={handleLogout}
        />

        {/* Animated “Mission Complete” */}
        <View style={styles.bannerContainer}>
          <Animated.View style={[styles.bannerHalf, { transform: [{ translateX: slideLeft }] }]}>
            <Text style={styles.bannerText}>Mission</Text>
          </Animated.View>
          <Animated.View style={[styles.bannerHalf, { transform: [{ translateX: slideRight }] }]}>
            <Text style={styles.bannerText}>Complete</Text>
          </Animated.View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: 'white' },
  container: { flex: 1, padding: 20, justifyContent: 'flex-start' },
  header: { fontSize: 32, fontWeight: 'bold', marginBottom: 10 },
  info: { fontSize: 18, marginBottom: 5 },
  bannerContainer: {
    flexDirection: 'row',
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bannerHalf: {
    backgroundColor: '#222',
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 4,
  },
  bannerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
  },
});
