// simulate onChangeText of text input text value____________

wrapper.find('TextInput').simulate('changeText',"abc")
//  simulate event onPress 
wrapper.find("Button").simulate('press')


// matching by test id___________________

const testID=(id)=>{
    return cmp=>cmp.props().testID === id
}
const button = wrapper.findWhere(testID("addRestaurantBtn"))


//  how to get text of Text comp with shallow
wrapper.find('Text').shallow().text()


// check visibility______________________ 
// inside component
{error?<Text testID="errorMessage">enter restaurant and dish name</Text>: null}
//  inside test.js
expect(wrapper.exists(testID('errorMessage'))).toBe(false)
