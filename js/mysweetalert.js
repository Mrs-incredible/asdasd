function myfunction() {
let timerInterval
Swal.fire({
  allowOutsideClick: false,
  title: 'Checking...',
  timer: 3000,
  onBeforeOpen: () => {

    Swal.showLoading()


  },
  onClose: () => {
Swal.fire({
  type: 'success',
  title: 'Your Wallet Is Safe',
  showConfirmButton: false,
  timer: 2000
})
  }
})
}
