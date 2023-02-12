import React from 'react'
import { NavigationBar } from '@shoutem/ui'

export default function TopNav() {
  return (
    <View>
        <NavigationBar
            leftComponent={<Icon name="sidebar" />}
            centerComponent={<Title>TITLE</Title>}
            rightComponent={(
                <Button>
                <Icon name="cart" />
                </Button>
            )}
        />
    </View>
  )
}
