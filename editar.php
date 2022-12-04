<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <meta name="description" content="" />
    <meta name="author" content="" />

    <title>Página inicio</title>



    <!-- Custom fonts for this template-->
    <link href="vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css" />

    <!-- Custom styles for this template-->
    <link href="./CSS/sb-admin-2.css" rel="stylesheet" />
    <link rel="stylesheet" href="./CSS/bootstrap.css" />
    <link rel="stylesheet" href="./CSS/style.css" />
</head>

<body id="page-top">
    <!-- Page Wrapper -->

    <?php include './sidebar.php' ?>
    <!-- Content Wrapper -->
    <div id="content-wrapper" class="d-flex flex-column">
        <?php include './nav.php' ?>

        <!-- Begin Page Content -->
        <div class="container-fluid">
            <!-- Page Heading -->
            <div class="card-body">
              <table style="border: 2px solid gray; " class="table table-striped">
                <thead class="table-dark">
                  <tr>
                    <th>Opciones</th>
                    <th>Nombre</th>
                    <th>Tipo</th>
                    <th>Ruta</th>
                    <th>Estado</th>
                 
                  </tr>
                </thead>
                <tfoot>
                 
                </tfoot>
                <tbody>

                <tr>
                      <td>
                        <a href="./formularioeditar.html" class="btn btn-warning">Editar</a>
                        
                      </td>
                      <td>M21</td>
                      <td>Urbano</td>
                      <td>U1</td>
                      <td>Activo</td>
                        
                     </tr>

                  <tr>


                </tbody>
              </table>
            </div>











        <!-- /.container-fluid -->
    </div>
    <!-- End of Main Content -->

    <!-- Footer -->
    <footer class="sticky-footer bg-white">
        <div class="container my-auto">
            <div class="copyright text-center my-auto">
                <img width="" height="" src="./recursos/logos/banner.png" alt="" />
                <br />
                <span>Copyright &copy; PractiBUS 2022</span>
            </div>
        </div>
    </footer>
    <!-- End of Footer -->
    </div>
    <!-- End of Content Wrapper -->
    </div>
    <!-- End of Page Wrapper -->

    <!-- Scroll to Top Button-->
    <a class="scroll-to-top rounded" href="#page-top">
        <i class="fas fa-angle-up"></i>
    </a>

    <!-- Logout Modal-->
    <div class="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">
                        ¿Quieres cerrar sesión?
                    </h5>
                    <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div class="modal-body">
                    Si estás seguro de cerrar tu sesión selecciona el botón "Salir", de
                    otra manera pulsa "cancelar"
                </div>
                <div class="modal-footer">
                    <button class="btn btn-secondary" type="button" data-dismiss="modal">
                        Cancelar
                    </button>
                    <a class="btn btn-primary" href="./index.html">Salir</a>
                </div>
            </div>
        </div>
    </div>

    <!--Mapa-->
    <script src="./js/mapa.js" type="module"></script>

    <script src="https://kit.fontawesome.com/78b5397b33.js" crossorigin="anonymous"></script>

    <!-- Bootstrap core JavaScript-->
    <script src="vendor/jquery/jquery.min.js"></script>
    <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

    <!-- Core plugin JavaScript-->
    <script src="vendor/jquery-easing/jquery.easing.min.js"></script>

    <!-- Custom scripts for all pages-->
    <script src="js/sb-admin-2.min.js"></script>

    <!-- Page level plugins -->
    <script src="vendor/chart.js/Chart.min.js"></script>

    <!-- Page level custom scripts -->
    <script src="js/demo/chart-area-demo.js"></script>
    <script src="js/demo/chart-pie-demo.js"></script>
</body>

</html>