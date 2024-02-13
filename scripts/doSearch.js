

function doSearch(form, event) {

  // DuckDuckGo is normal
  
  let formValue;
  let formAction

  switch (form[0].value.split("!")[0].toLowerCase()) {
    case "g":
    case "google":
      formAction = "https://www.google.com/search"
      formValue = form[0].value.split("!")[1];
      form.method = "get";
      break;
    case "s":
    case "so":
      formAction = "https://stackoverflow.com/search"
      formValue = form[0].value.split("!")[1];
      form.method = "get";
      break;
    case "w":
      event.preventDefault();
      let url = "https://"+form[0].value.split("!")[1]
      window.location.href = url;
      break;
    default:
      formValue = form[0].value;
      formAction = "https://duckduckgo.com/";
      break;
  }
  
  form[0].value = formValue;
  form.action = formAction;

}