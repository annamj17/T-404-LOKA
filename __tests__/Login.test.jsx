import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';

import RenderLogin from '../src/components/RenderLogin/renderLogin';

describe('Should render the Login page without crashing', () => {
  it('renders correctly', () => {
    const rendered = renderer.create(<RenderLogin />).toJSON();
    expect(rendered).toMatchSnapshot();
  });
});

describe('Login tests', () => {
  const onNavigateSpy = jest.fn();
  const props = {
    navigation: {
      navigate: onNavigateSpy
    }
  };

  const isLoading = false;
  const setIsLoading = false;
  const userName = '';
  const setUserName = '';

  const wrapper = shallow(
    <RenderLogin {...props} {...isLoading} {...setIsLoading} {...userName} {...setUserName} />
  );

  it('Should find 2 TextInputs', () => {
    expect(wrapper.find('TextInput')).toHaveLength(2);
  });

  it('Should find the TextInput for userName', () => {
    expect(wrapper.find('TextInput[type="text"]')).toHaveLength(1);
  });

  it('Should find the TextInput for password', () => {
    expect(wrapper.find('TextInput[type="password"]')).toHaveLength(1);
  });

  it('Should handle onPress for login', () => {
    const wrap = mount(<RenderLogin {...props} />);
    wrap
      .find('TouchableOpacity[name="login"]')
      .first()
      .props()
      .onPress();
    expect(userName).toBeFalsy();
  });
});
