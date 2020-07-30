import React from 'react';
import { TextInput } from 'react-native';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import RenderProductScreen from '../src/components/RenderProductScreen/renderProductScreen';

describe('Should render the Product page without crashing', () => {
  it('renders correctly', () => {
    const wrapper = renderer
      .create(
        <RenderProductScreen
          productData={{
            productDetailsId: '1',
            color: 'Black',
            colorScore: '99.98',
            brand: 'Nike',
            brandScore: '99.78',
            type: 'Sweatshirt',
            typeScore: '98.99',
            productPrice: {
              fullConditionPrice: '50',
              resalePrice: '25'
            }
          }}
        />
      )
      .toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Product tests', () => {
  let wrapper;
  const onNavigateSpy = jest.fn();
  const props = {
    navigation: {
      navigate: onNavigateSpy
    }
  };

  beforeEach(() => {
    wrapper = shallow(
      <RenderProductScreen
        productData={{
          productDetailsId: '1',
          color: 'Black',
          colorScore: '99.98',
          brand: 'Nike',
          brandScore: '99.78',
          type: 'Sweatshirt',
          typeScore: '98.99',
          productPrice: {
            fullConditionPrice: '50',
            resalePrice: '25'
          },
          error: ''
        }}
        {...props}
      />
    );
  });

  it('Should find 5 TextInputs', () => {
    expect(wrapper.find('TextInput')).toHaveLength(5);
  });

  it('Should find the TextInput for color', () => {
    expect(wrapper.find('TextInput[name="color"]')).toHaveLength(1);
  });

  it('Should test TextInput for color', () => {
    expect(shallow(<TextInput color="Black" />).prop('color')).toBe('Black');
  });

  it('Should find the TextInput for brand', () => {
    expect(wrapper.find('TextInput[name="brand"]')).toHaveLength(1);
  });

  it('Should test TextInput for brand', () => {
    expect(shallow(<TextInput brand="Adidas" />).prop('brand')).toBe('Adidas');
  });

  it('Should find the TextInput for type', () => {
    expect(wrapper.find('TextInput[name="type"]')).toHaveLength(1);
  });

  it('Should test TextInput for type', () => {
    expect(shallow(<TextInput type="Sweatshirt" />).prop('type')).toBe('Sweatshirt');
  });

  it('Should find the TextInput for fullConditionPrice', () => {
    expect(wrapper.find('TextInput[name="fullConditionPrice"]')).toHaveLength(1);
  });

  it('Should test TextInput for fullConditionPrice', () => {
    expect(shallow(<TextInput fullConditionPrice="50" />).prop('fullConditionPrice')).toBe('50');
  });

  it('Should find the TextInput for resalePrice', () => {
    expect(wrapper.find('TextInput[name="resalePrice"]')).toHaveLength(1);
  });

  it('Should test TextInput for resalePrice', () => {
    expect(shallow(<TextInput resalePrice="25" />).prop('resalePrice')).toBe('25');
  });

  it('Should find 1 TouchableOpacity', () => {
    expect(wrapper.find('TouchableOpacity')).toHaveLength(1);
  });

  it('Should handle onPressFunction', () => {
    const instance = wrapper.instance();
    jest.spyOn(instance, 'onPress');
    wrapper.find('TouchableOpacity[name="register"]').simulate('Press');
    expect(instance.onPress).toHaveBeenCalled();
  });

  it('Should handle onInputHandler for color', () => {
    const instance = wrapper.instance();
    jest.spyOn(instance, 'onInputHandler');
    wrapper.find('TextInput[name="color"]').simulate('changeText', 'blue');
    expect(instance.onInputHandler).toHaveBeenCalledWith('color', 'blue');
  });

  it('Should handle onInputHandler for type', () => {
    const instance = wrapper.instance();
    jest.spyOn(instance, 'onInputHandler');
    wrapper.find('TextInput[name="type"]').simulate('changeText', 'hoodie');
    expect(instance.onInputHandler).toHaveBeenCalledWith('type', 'hoodie');
  });

  it('Should handle onInputHandler for brand', () => {
    const instance = wrapper.instance();
    jest.spyOn(instance, 'onInputHandler');
    wrapper.find('TextInput[name="brand"]').simulate('changeText', 'adidas');
    expect(instance.onInputHandler).toHaveBeenCalledWith('brand', 'adidas');
  });

  it('Should handle onInputHandler', () => {
    const instance = wrapper.instance();
    jest.spyOn(instance, 'onInputHandler');
    wrapper.find('TextInput[name="brand"]').simulate('changeText', 'adidas');
    expect(instance.onInputHandler).toHaveBeenCalledWith('brand', 'adidas');
  });
});
