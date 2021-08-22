import React from 'react';

// todo: correct type for this component
type InfiniteScrollProps<T> = {
  data: Array<T>;
  renderItem: (itemProps: {
    item: T;
    index: number;
    array: Array<T>;
  }) => React.ReactNode;
  keyExtractor: (item: T, index: number) => string;
  renderEmptyList: () => React.ReactNode;
};

function InfiniteScroll<T>({
  data,
  renderItem,
  keyExtractor,
  renderEmptyList,
}: InfiniteScrollProps<T>) {
  return (
    <div>
      {!data.length && renderEmptyList()}
      {data.map((item, index, array) => (
        <div key={keyExtractor(item, index)}>
          {renderItem({ item, index, array })}
        </div>
      ))}
    </div>
  );
}

type Data = Array<{ id: string; name: string }>;

function App() {
  const data: Data = [];
  return (
    <InfiniteScroll
      data={data}
      renderEmptyList={() => <div>No content</div>}
      keyExtractor={({ id }) => id}
      renderItem={({ item }) => (
        <div>
          id: {item.id}
          name: {item.name}
        </div>
      )}
    />
  );
}
