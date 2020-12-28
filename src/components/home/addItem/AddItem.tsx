import React from "react";

import NewItem from "./NewItem";

// import { Button } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import AddIcon from "@material-ui/icons/Add";
import { Card, Button } from "react-bootstrap";

import "../../../index.css";

import { IAddComponentProps } from "../../types"

const addItemComponent: React.FC<IAddComponentProps> = (props): JSX.Element => {
  const { items, onAddItemHandler, onDeleteItemHandler, types, onChangeHandler, onSaveItemHandler } = props;

  return (
    <>
      {items.map((item, index) => {
        return (
          <NewItem
            item={item}
            key={index}
            index={index}
            onDeleteItemHandler={onDeleteItemHandler}
            types={types}
            onChangeHandler={onChangeHandler}
          />
        );
      })}

      <div className="mt-1">
        <Card bg="bg">
          <Card.Body>
            <div className="right-align">
              <Button className="add-new-item" onClick={onAddItemHandler}>
                <AddIcon /> Add New Item
              </Button>
              <Button className="save-item-button" onClick={onSaveItemHandler}>
                <SaveIcon /> Save Item(s)
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default addItemComponent;
