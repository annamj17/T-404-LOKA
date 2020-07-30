import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import LeftHeaderLogo from '../src/components/HeaderLogo/LeftHeaderLogo/leftHeaderLogo';

describe('Should render the LeftHeader page without crashing', () => {
  it('renders correctly', () => {
    const rendered = renderer.create(<LeftHeaderLogo />).toJSON();
    expect(rendered).toMatchSnapshot();
  });
});

describe('LeftHeader tests', () => {
  const onNavigateSpy = jest.fn();
  const props = {
    navigation: {
      navigate: onNavigateSpy
    }
  };
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<LeftHeaderLogo {...props} />);
  });

  it('Should find 1 TouchableOpacity', () => {
    expect(wrapper.find('TouchableOpacity')).toHaveLength(1);
  });

  it('should test onPress navigation', () => {
    const press = wrapper.find('TouchableOpacity');
    press.simulate('Press');
    expect(props.navigation.navigate).toHaveBeenCalledWith('HomeView');
  });
});
