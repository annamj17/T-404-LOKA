import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import RenderHomeScreen from '../src/components/RenderHomeScreen/renderHomeScreen';

import { selectFromCameraRoll, takePhoto } from '../src/services/imageService';

jest.mock('../src/services/imageService');

describe('Should render the Home page without crashing', () => {
  it('renders correctly', () => {
    const rendered = renderer.create(<RenderHomeScreen />).toJSON();
    expect(rendered).toMatchSnapshot();
  });
});

describe('HomeScreen tests', () => {
  const onNavigateSpy = jest.fn();
  const props = {
    navigation: {
      navigate: onNavigateSpy
    }
  };
  const photo = {
    photoToDisplay: 'mynd.jpg',
    tags: {
      productDetailsId: '1',
      color: 'black',
      colorScore: '99.98',
      brand: 'Nike',
      brandScore: '99.78',
      type: 'Sweatshirt',
      typeScore: '98.99',
      productPrice: { fullConditionPrice: '50', resalePrice: '25' }
    }
  };

  const wrapper = shallow(<RenderHomeScreen {...props} {...photo} />);

  it('Should find 2 TouchableOpacity', () => {
    expect(wrapper.find('TouchableOpacity')).toHaveLength(2);
  });

  it('Should handle selectFromCameraRoll onPress and navigation', async () => {
    await selectFromCameraRoll.mockReturnValueOnce({
      photo: {
        photoToDisplay: 'mynd.jpg',
        tags: {
          productDetailsId: '1',
          color: 'black',
          colorScore: '99.98',
          brand: 'Nike',
          brandScore: '99.78',
          type: 'Sweatshirt',
          typeScore: '98.99',
          productPrice: { fullConditionPrice: '50', resalePrice: '25' }
        }
      }
    });

    const wrapp = shallow(<RenderHomeScreen {...props} {...photo} />);
    wrapp.find('TouchableOpacity[name="cameraRoll"]').simulate('Press');
    expect(photo).not.toBeNull();
  });

  it('Should handle takePhoto onPress and navigation', async () => {
    await takePhoto.mockReturnValueOnce({
      photo: {
        photoToDisplay: 'mynd.jpg',
        tags: {
          productDetailsId: '1',
          color: 'black',
          colorScore: '99.98',
          brand: 'Nike',
          brandScore: '99.78',
          type: 'Sweatshirt',
          typeScore: '98.99',
          productPrice: { fullConditionPrice: '50', resalePrice: '25' }
        }
      }
    });

    const wrapp = shallow(<RenderHomeScreen {...props} {...photo} />);
    wrapp.find('TouchableOpacity[name="camera"]').simulate('Press');
    expect(photo).not.toBeNull();
  });
});
