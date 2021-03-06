<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">
    <link href="{{asset('backend')}}/img/logo/logo.png" rel="icon">
    <title>RuangAdmin - Dashboard</title>
    <link rel="stylesheet" href="{{asset('css/app.css')}}">
    <link href="{{asset('backend')}}/vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
    <link href="{{asset('backend')}}/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" type="text/css">
    <link href="{{asset('backend')}}/css/ruang-admin.min.css" rel="stylesheet">
</head>

<body id="page-top">
    <div id="app">
        <div id="wrapper">
            <!-- Sidebar -->
            @include('partial.sidebar')
            <!-- Sidebar -->
            <div id="content-wrapper" class="d-flex flex-column">
                <div id="content">
                    <!-- TopBar -->
                    @include('partial.topbar')
                    <!-- Topbar -->
                    <!-- Container Fluid-->
                    <div class="container-fluid" id="container-wrapper">
                        <router-view></router-view>
                    </div>
                    <!---Container Fluid-->
                </div>
            </div>
        </div>
    </div>
    <!-- Scroll to top -->
    <a class="scroll-to-top rounded" href="#page-top">
        <i class="fas fa-angle-up"></i>
    </a>
    <script src="{{asset('js/app.js')}}"></script>
    <script src="{{asset('backend')}}/vendor/jquery/jquery.min.js"></script>
    <script src="{{asset('backend')}}/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
    <script src="{{asset('backend')}}/vendor/select2/dist/js/select2.min.js"></script>
    <script src="{{asset('backend')}}/vendor/bootstrap-datepicker/js/bootstrap-datepicker.min.js"></script>
    <script src="{{asset('backend')}}/vendor/bootstrap-touchspin/js/jquery.bootstrap-touchspin.js"></script>
    <script src="{{asset('backend')}}/vendor/clock-picker/clockpicker.js"></script>
    <script src="{{asset('backend')}}/js/ruang-admin.js"></script>
    <script src="{{asset('backend')}}/vendor/chart.js/Chart.min.js"></script>
    <script src="{{asset('backend')}}/js/demo/chart-area-demo.js"></script>

</body>

</html>
