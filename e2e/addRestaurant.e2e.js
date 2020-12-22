describe('adding restaurant to list ', () => {
    beforeEach(async () => {
      await device.reloadReactNative();
    });
     it( "check creating restaurant ", async()=>{
       const restaurantName = "kokand"
       const dishName= 'plov'
      await expect(element(by.id("restaurantNameText"))).toBeVisible()
      await expect(element(by.id("dishNameText"))).toBeVisible()
      await expect(element(by.id("addRestaurantBtn"))).toBeVisible()
      await expect(element(by.id("restaurantListItem"))).toBeNotVisible()
      await element(by.id("restaurantNameText")).typeText(restaurantName)
      await element(by.id("dishNameText")).typeText(dishName)
      await element(by.id("addRestaurantBtn")).tap()
      await expect(element(by.id("restaurantListItem"))).toBeVisible()

     })

})