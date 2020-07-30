import React from 'react';
import { Text } from 'react-native';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import RenderFinalScreen from '../src/components/RenderFinalScreen/renderFinalScreen';

describe('Should render the Login page without crashing', () => {
  it('renders correctly', () => {
    const wrapper = renderer
      .create(
        <RenderFinalScreen
          productData={{
            tags: {
              productDetailsId: '1',
              color: 'black',
              colorScore: '99.98',
              brand: 'Nike',
              brandScore: '99.78',
              type: 'Sweatshirt',
              typeScore: '98.99',
              productPrice: {
                fullConditionPrice: '50',
                resalePrice: '25'
              }
            }
          }}
        />
      )
      .toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Should test FinalScreen', () => {
  let wrapper;
  const onNavigateSpy = jest.fn();
  const props = {
    navigation: {
      navigate: onNavigateSpy
    }
  };
  beforeEach(() => {
    wrapper = shallow(
      <RenderFinalScreen
        productData={{
          tags: {
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
          }
        }}
        {...props}
      />
    );
  });

  it('Should find 6 Text', () => {
    expect(wrapper.find('Text')).toHaveLength(6);
  });

  it('Should test Text for color', () => {
    expect(shallow(<Text color="Black" />).prop('color')).toBe('Black');
  });

  it('Should test Text for brand', () => {
    expect(shallow(<Text brand="Nike" />).prop('brand')).toBe('Nike');
  });

  it('Should test Text for type', () => {
    expect(shallow(<Text type="Sweatshirt" />).prop('type')).toBe('Sweatshirt');
  });

  it('Should test Text for fullConditionPrice', () => {
    expect(shallow(<Text fullConditionPrice="50" />).prop('fullConditionPrice')).toBe('50');
  });

  it('Should test Text for resalePrice', () => {
    expect(shallow(<Text resalePrice="25" />).prop('resalePrice')).toBe('25');
  });

  it('Should find 1 Button', () => {
    expect(wrapper.find('Button')).toHaveLength(1);
  });

  it('should test button navigation', () => {
    const press = wrapper.find('Button');
    press.simulate('Press');
    expect(props.navigation.navigate).toHaveBeenCalledWith('HomeView');
  });
});
