import React, { Component } from 'react';
import ManipulationItem from './ManipulationItem';
import { Grid, Segment } from 'semantic-ui-react';

export default class ManipulationGroup extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    const { manipulations, manipulationsMasterSet, handleItemDel,
      onChangeMethodName, onChangeArguments, handleAddition,
      handleItemAdd, updateVariable, setterPath, type, manipulationForField } = this.props;

    return (
      <Segment style={{ marginTop: '0.5rem' }}>
        <Grid>
          {manipulations.map((mD, mI) => {
            return (mD.type !== 'auto') ? <Grid.Column width={16} key={mI}>
              <ManipulationItem
                methodOptions={this.props.methodOptions}
                ifOperators={this.props.ifOperators}
                argumentOptions={this.props.argumentOptions}
                handleItemAdd={handleItemAdd}
                handleAddition={handleAddition}
                onChangeMethodName={onChangeMethodName}
                onChangeArguments={onChangeArguments}
                setterPath={`${setterPath}[${mI}]`}
                item={mD}
                type={type}
                manipulations={manipulations}
                manipulationsMasterSet={manipulationsMasterSet}
                updateVariable={updateVariable}
                handleItemDel={handleItemDel}
                context={this.props.hasOwnProperty('context') ? this.props.context : 'NA'}
                manipulationForField={manipulationForField}
              />
            </Grid.Column> : null
          })}
        </Grid>
      </Segment>
    )

  }
}
