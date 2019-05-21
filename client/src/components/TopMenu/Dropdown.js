import React, { Component } from 'react';
import styled from 'styled-components/macro';
import categories from '../../utils/categories';
import SelectWrapper from '../shared/form/SelectWrapper';

const Dropdown = styled.select`
  width: 100%;
  padding: 8px 16px;

  border: 1px solid ${props => props.theme.border};
  border-left: none;
  border-right: none;
  font-size: 16px;
  font-weight: 600;
  border-radius: 0;
  appearance: none;

  background-color: ${props => props.theme.foreground};
  color: ${props => props.theme.normalText};
`;

class TopMenuDropdown extends Component {
  mapCategories = () =>
    ['all', ...categories].map((category, index) => (
      <option key={index} value={category}>
        {category}
      </option>
    ));

  handleOnChange = event => {
    const category = event.target.value;
    if (category !== this.props.category) {
      const url = category === 'all' ? '/' : `/a/${category}`;
      this.props.history.push(url);
    }
  };

  render() {
    return (
      <SelectWrapper flex>
        <Dropdown value={this.props.category} onChange={this.handleOnChange}>
          {this.mapCategories()}
        </Dropdown>
      </SelectWrapper>
    );
  }
}

export default TopMenuDropdown;
