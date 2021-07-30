
import React from 'react';
import { FlatList } from 'react-native';

export function VirtualizedView(props: any) {
  return (
    <FlatList
      onRefresh={props?.onRefresh}
      style={props.style}
      refreshing={props.isFetching}
      data={[]}
      ListEmptyComponent={null}
      keyExtractor={() => "dummy"}
      renderItem={null}
      ListHeaderComponent={() => (
        <React.Fragment>{props.children}</React.Fragment>
      )}
    />
  );
}