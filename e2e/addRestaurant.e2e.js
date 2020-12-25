describe('adding restaurant to list ', () => {
    beforeEach(async () => {
      await device.reloadReactNative();
    });
      const restaurantName = "kokand"
      const dishName= 'plov'

     it( "check creating restaurant ", async()=>{
      
      await expect(element(by.id("restaurantNameText"))).toBeVisible()
      await expect(element(by.id("dishNameText"))).toBeVisible()
      await expect(element(by.id("addRestaurantBtn"))).toBeVisible()
      await expect(element(by.id("restaurantListItem"))).toBeNotVisible()
      await element(by.id("restaurantNameText")).typeText(restaurantName)
      await element(by.id("dishNameText")).typeText(dishName)
      await element(by.id("addRestaurantBtn")).tap()
      await expect(element(by.id("restaurantListItem"))).toBeVisible()
      await element(by.id("restaurantNameText")).typeText(restaurantName+"2")
      await element(by.id("dishNameText")).typeText(dishName+"2")
      await element(by.id("addRestaurantBtn")).tap()
      await expect(element(by.text(restaurantName+"2"))).toBeVisible()
     
     })
      it("check error message",async()=>{
      await element(by.id("addRestaurantBtn")).tap()
      await expect(element(by.id("errorMessage"))).toBeVisible()
      await element(by.id("restaurantNameText")).typeText(restaurantName+"3")
      await element(by.id("dishNameText")).typeText(dishName+"3")
      await element(by.id("addRestaurantBtn")).tap()
      await expect(element(by.id("errorMessage"))).toBeNotVisible()
      })
})