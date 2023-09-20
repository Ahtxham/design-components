import React, { useRef, useState, useEffect, useCallback } from "react";
import { CSSTransition } from "react-transition-group";
import { AutoSizer, List } from "react-virtualized";
import { ArrowDownSvg } from "@svgs";
import { Wrapper, Content, SelectedItem, Item, Icon, Input } from "./styles";

const _getLabel = (o) => o;

const defaultOptionsStyle = {
  border: "2px solid var(--lightgray)",
  background: "var(--bg-pink)",
  "box-shadow": "rgb(0 0 0 / 6%) 0px 0px 5px 0px",
};


const Select = ({
  options = [],
  value = "",
  valueKey,
  iconKey,
  width = "auto",
  itemHeight = 30,
  openCount = 5,
  disabled,
  placeholder,
  searchable,
  alignTop,
  filter,
  arrow: Arrow = ArrowDownSvg,
  getLabel = _getLabel,
  onChange = () => {},
  style,
  className,
  optionContainerStyle = defaultOptionsStyle,

}) => {
  const wrapperRef = useRef();
  const listRef = useRef();
  const [isOpened, setIsOpened] = useState(false);
  const [filterStr, setFilterStr] = useState("");
  const [data, setData] = useState([]);

  const getValue = useCallback(
    (item) => (valueKey ? item[valueKey] : item),
    [valueKey]
  );

  useEffect(() => {
    if (isOpened) {
      const index = options.findIndex((item) => getValue(item) === value);
      if (index > 0) {
        listRef?.current.scrollToRow(index);
      }

      const handleClickOutside = (event) => {
        if (!wrapperRef.current.contains(event.target)) {
          setIsOpened(false);
        }
      };

      document.addEventListener("click", handleClickOutside);
      return () => {
        document.removeEventListener("click", handleClickOutside);
      };
    } else {
      setFilterStr("");
    }
  }, [getValue, isOpened, options, value]);

  useEffect(() => {
    let arr = options;
    if (filterStr) {
      const str = filterStr.toLowerCase();
      arr = options.filter((item) =>
        filter ? filter(item, str) : getLabel(item).toLowerCase().includes(str)
      );
    }
    setData(arr);
    if (listRef.current) {
      listRef.current.scrollToRow(0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterStr, filter, getLabel]);

  const rowRenderer = ({ key, index, style }) => {
    const item = data[index];
    const optionValue = getValue(item);
    const isSelected = optionValue === value;

    const handleSelectItem = (e) => {
      setIsOpened(false);
      onChange(item);
    };

    const classes = ["select-option"];
    if (isSelected) {
      classes.push("select-option-selected");
    }
    if (item.disabled) {
      classes.push("select-option-disabled");
    }

    return (
      <Item
        className={classes}
        key={key}
        style={style}
        onClick={handleSelectItem}
      >
        {item[iconKey] && <Icon className="select-icon" src={item[iconKey]} />}
        <span>{getLabel(item)}</span>
      </Item>
    );
  };

  const currentItem = data.find((item) => getValue(item) === value);
  const height = itemHeight * Math.min(openCount, data.length);

  return (
    <Wrapper
      ref={wrapperRef}
      disabled={disabled}
      style={{ width, ...style }}
      className={className}
      height={height}
      itemHeight={itemHeight}
      alignTop={alignTop}
      isOpened={isOpened}
    >
      <Content className="select-content">
        <SelectedItem
          className="select-selected-item"
          onClick={() => setIsOpened(!isOpened)}
          isOpened={isOpened}
        >
          {!filterStr ? (
            <>
              {(currentItem || {})[iconKey] && (
                <Icon className="select-icon" src={currentItem[iconKey]} />
              )}
              {currentItem ? (
                <span>{getLabel(currentItem)}</span>
              ) : (
                <span className="select-placeholder">{placeholder}</span>
              )}
            </>
          ) : (
            <span />
          )}
          {Arrow && <Arrow className="select-arrow-icon" />}
        </SelectedItem>
        {isOpened && searchable && (
          <Input
            className="select-input"
            autoFocus
            value={filterStr}
            onChange={(e) => setFilterStr(e.target.value)}
          />
        )}

        <CSSTransition in={isOpened} unmountOnExit timeout={300}>
          <AutoSizer>
            {({ width }) => (
              <List
                style={optionContainerStyle}
                ref={listRef}
                width={width}
                height={height}
                rowHeight={itemHeight}
                rowCount={data.length}
                rowRenderer={rowRenderer}
              />
            )}
          </AutoSizer>
        </CSSTransition>
      </Content>
    </Wrapper>
  );
};

export default Select;
