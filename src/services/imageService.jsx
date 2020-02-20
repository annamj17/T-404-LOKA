import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

// Prompt the user for types of permissions
const getPermission = async permissionTypes => {
  await Promise.all(
    permissionTypes.map(async type => Permissions.askAsync(type))
  );
};

// Selecting a photo from the cameraroll
// Uses getPermission to ask for the permission type for reading or writing to the camera roll.
export const selectFromCameraRoll = async () => {
  await getPermission([Permissions.CAMERA_ROLL]);
  const result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    quality: 0.8,
    base64: true,
    aspect: [16, 9]
  });

  if (result.cancelled) {
    return '';
  }
  return result.uri;
};

// Takes a photo using your camera
// Uses getPermission to ask for the permission type for photo and video taking
export const takePhoto = async () => {
  await getPermission([Permissions.CAMERA, Permissions.CAMERA_ROLL]);
  const result = await ImagePicker.launchCameraAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    quality: 0.8,
    base64: true,
    aspect: [16, 9]
  });

  if (result.cancelled) {
    return '';
  }
  return result.uri;
};
