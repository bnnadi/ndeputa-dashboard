const options = [
    {
        key: "employees",
        label: "sidebar.employees",
        leftIcon: "ion-android-people"
      },
      {
        key: "customers",
        label: "sidebar.customers",
        leftIcon: "ion-android-people"
      },
      {
        key: "products",
        label: "sidebar.products",
        leftIcon: "ion-bag",
        children: [
          {
            key: "shop",
            label: "sidebar.shop"
          },
          {
            key: "cart",
            label: "sidebar.cart"
          },
          {
            key: "checkout",
            label: "sidebar.checkout"
          }
        ]
      },
      {
        key: "invoice",
        label: "sidebar.invoice",
        leftIcon: "ion-clipboard"
      },
      {
        key: "calendar",
        label: "sidebar.calendar",
        leftIcon: "ion-calendar"
      },
      {
        key: "notes",
        label: "sidebar.notes",
        leftIcon: "ion-ios-paper"
      },
      {
        key: "todo",
        label: "sidebar.todos",
        leftIcon: "ion-android-checkbox-outline"
      },
      {
        key: "timesheets",
        label: "sidebar.timesheets",
        leftIcon: "ion-clock"
      },
];
export default options;