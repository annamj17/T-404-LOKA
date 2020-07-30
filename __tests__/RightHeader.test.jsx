import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';

import RightHeaderLogo from '../src/components/HeaderLogo/RightHeaderLogo/rightHeaderLogo';

describe('Should render the RightHeader page without crashing', () => {
  it('renders correctly', () => {
    const rendered = renderer.create(<RightHeaderLogo />).toJSON();
    expect(rendered).toMatchSnapshot();
  });
});

describe('RightHeader tests', () => {
  const onNavigateSpy = jest.fn();
  const props = {
    navigation: {
      navigate: onNavigateSpy
    }
  };
  const menu = null;

  const wrapper = shallow(<RightHeaderLogo {...props} {...menu} />);
  it('Should find 1 Menu', () => {
    expect(wrapper.find('Menu')).toHaveLength(1);
  });

  it('Should find 1 MenuItem', () => {
    expect(wrapper.find('MenuItem')).toHaveLength(1);
  });

  it('Should handle onPress for hideMenu', () => {
    const wrap = mount(<RightHeaderLogo {...props} {...menu} />);
    const instance = wrapper.instance();
    jest.spyOn(instance, 'hideMenu');
    wrap
      .find('MenuItem')
      .first()
      .props()
      .onPress();
    expect(props.navigation.navigate).toHaveBeenCalled();
  });
});
