import { mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import wait from 'waait';
import SingleItem, { SINGLE_ITEM_QUERY } from '../components/SingleItem';
import { MockedProvider } from 'react-apollo/test-utils';
import { fakeItem } from '../lib/testUtils';

describe('<SingleItem/>', () => {
    it('renders with proper data', async() => {
        const mocks = [
            {
                // when someone makes a request with this qery and variable combo
                request: { query: SINGLE_ITEM_QUERY, variables: { id: '123' } },
                // then return this fake data ( mocked data )
                result: { 
                    data: {
                        item: fakeItem(),
                    },
                },
            },
        ]
        const wrapper = mount(
            <MockedProvider mocks={mocks}>
                <SingleItem id="123" />
            </MockedProvider>        
        );
        // console.log(wrapper.debug());
        expect(wrapper.text()).toContain('Loading...');
        await wait();
        wrapper.update();
        expect(toJSON(wrapper.find('h2'))).toMatchSnapshot();
    });
});
